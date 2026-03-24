import myPhoto from  "../assets/cat_img.jpg"

export default function Avatar({person, size}){

    return (
        <div className="avatar">
            <img
                src={person.imageUrl}
                alt={person.name}
                width={size.width}
                height={size.height}                
            />
        </div>
    )
}