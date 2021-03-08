class Courts {
  constructor(
    id,
    ownerId,
    title,
    imageUrl,
    description,
    price,
    parking,
    warning
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.price = price;
    this.parking = parking;
    this.warning = warning;
  }
}

export default Courts;
