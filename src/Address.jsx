function Address(
    {
        street,
        city="Auckland",
        country="New Zealand"
    }
) {
    return (
        <div className="Address componentBox">
            {street},
            {city},
            {country}
        </div>
    )
}

export default Address