function ProfilePicture() {

    const imgUrl = "src/5766472.png"

    const test = (e)=>e.target.style.display = "none";
    return (
        <>
            <div>
                <img onClick={(e)=>test(e)} src={imgUrl}/>
                <p>Click the image</p>
            </div>

        </>
    )
}

export default ProfilePicture