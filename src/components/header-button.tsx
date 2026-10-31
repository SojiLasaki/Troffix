import '../styles/buttons.css';
function HeaderButton({ text }: { text: string }) {
    return (
        <button className="header-primary-button">{text}</button>
    )
}
export default HeaderButton;