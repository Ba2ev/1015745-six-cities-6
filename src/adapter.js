export const adaptOffersToClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    host: {
      ...offer.host,
      avatarUrl: offer.host.avatar_url,
      isPro: offer.host.is_pro,
    },
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    previewImage: offer.preview_image,
    maxAdults: offer.max_adults,
  };

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

export const adaptCommentsToClient = (comment) => {
  const adaptedComment = {
    ...comment,
    user: {
      ...comment.user,
      avatarUrl: comment.user.avatar_url,
      isPro: comment.user.is_pro,
    },
  };

  delete adaptedComment.user.avatar_url;
  delete adaptedComment.user.is_pro;

  return adaptedComment;
};
