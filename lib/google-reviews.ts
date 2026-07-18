export type GoogleReview = {
  id: string;
  name: string;
  photoUrl?: string;
  rating: number;
  text: string;
  date: string;
  timestamp: number;
};

type PlacesReview = {
  author_name?: string;
  profile_photo_url?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
  time?: number;
};

type PlacesResponse = {
  result?: {
    reviews?: PlacesReview[];
  };
  status?: string;
};

const GOOGLE_PLACES_DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json";

export async function getGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return [];
  }

  const params = new URLSearchParams({
    key: apiKey,
    place_id: placeId,
    fields: "reviews",
    reviews_sort: "newest"
  });

  try {
    const response = await fetch(`${GOOGLE_PLACES_DETAILS_URL}?${params.toString()}`, {
      cache: "no-store",
      next: { revalidate: 0 }
    });

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as PlacesResponse;
    const reviews = data.result?.reviews ?? [];
    const uniqueReviews = new Map<string, GoogleReview>();

    for (const review of reviews) {
      const name = review.author_name?.trim();
      const text = review.text?.trim();
      const rating = review.rating ?? 0;
      const timestamp = review.time ?? 0;

      if (!name || !text || !rating) {
        continue;
      }

      const id = `${name}-${timestamp}-${text}`;
      uniqueReviews.set(id, {
        id,
        name,
        photoUrl: review.profile_photo_url,
        rating,
        text,
        date: review.relative_time_description ?? formatReviewDate(timestamp),
        timestamp
      });
    }

    return Array.from(uniqueReviews.values()).sort((a, b) => b.timestamp - a.timestamp);
  } catch {
    return [];
  }
}

function formatReviewDate(timestamp: number) {
  if (!timestamp) {
    return "Google Review";
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(new Date(timestamp * 1000));
}
