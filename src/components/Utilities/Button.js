import "styles/components/Utilities/Button.css";
import { Link } from "react-router-dom";

function Button(props) {
  if (props.href) {
    return (
      <a className={`button ${getVariantClasses(props.variant)}`} {...props}>
        {props.children}
      </a>
    );
  }
  else if (props.to) {
    return (
      <Link className={`button ${getVariantClasses(props.variant)}`} {...props}>
        {props.children}
      </Link>
    );
  }
   else {
    return (
      <button className={`button ${getVariantClasses(props.variant)}`} {...props}>
        {props.children}
      </button>
    );
  }
}

function getVariantClasses(variant) {
    switch(variant) {
        case 'swipe':
            return "button--swipe";
        default :
            return "button--outlined";
    }
}

export default Button;
