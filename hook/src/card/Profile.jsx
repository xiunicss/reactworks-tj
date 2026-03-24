import Avatar from "./Avatar";
import myPhoto from  "../assets/cat_img.jpg"
import Card from "./Card"
export default function profile() {

    return(
        <div>
            {/* <h2>나의 프로필</h2>/ */}
            <Card>
                <Avatar
                    size = {{
                        width: "300px",
                        height: "200px"
                    }}
                    person = {{
                        name: "이수현",
                        imageUrl: myPhoto
                    }}
                />
            </Card>
        </div>
    )
}