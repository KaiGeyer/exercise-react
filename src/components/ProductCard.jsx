export default function ProductCard ({
    nr,
    name,
    category,
    price,
    available,
    stock,
    featured
}) {

    return(
        <article className={`product-card
                ${available ? "avail" : "not_avail" }
                ${featured ? "featured" : "not_feat" }`}

        >
            <h2> { title } </h2>
            <p>  { nr } </p>
            <p>  { name } </p>
            <p>  { category } </p>
            <p>  { price } Euro </p>

            <p> { available } </p>
            <p> { stock } </p>
            <p> { featured } </p>

        </article>
    );
}
