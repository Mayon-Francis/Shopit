import "styles/components/Product/Review.css";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

function Review() {
  return (
    <div className="testimonial-box-container">
      <div className="testimonial-box">
        <div className="box-top">
          <div className="profile">
            <div className="profile-img">
              <img
                src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
                alt=""
              />
            </div>
            <div className="name-user">
              <strong>Liam mendes</strong>
              <span>@liammendes</span>
            </div>
          </div>
          <div className="reviews">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarOutlineIcon />
          </div>
        </div>
        <div className="client-comment">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, quaerat quis? Provident temporibus architecto
            asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
            tenetur voluptates incidunt blanditiis sed atque cumque.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Review;
