import "./Header.css"
import Button from "../button/Button";

const Header = ({heading, button}) => {
    return (
        <>
            <header></header>

            <section class="heading">
                <h1>{heading}</h1>
                {
                    button ? 
                    <div className="header-btn">
                        <Button 
                            icon={button.icon}
                            label={button.label}
                            className={button.className}
                            handleClick={button.handleClick}
                        /> 
                    </div>: null
                }
            </section>
        </>
    )
}

export default Header;