import '../styles/mains.css';

function PageHeader({ title, tag } : { title: string, tag: string }) {
    return (
        <div>
            <header className="welcome-header">
                <h1>{title}</h1>
                <p>{tag}</p>
            </header>
        </div>
    );
}

export default PageHeader;