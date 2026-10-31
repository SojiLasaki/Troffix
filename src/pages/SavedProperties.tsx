import "../styles/saved_properties.css"
import PageHeader from '../components/page-header';
import HeaderButton from '../components/header-button';
function SavedProperties({ title, tag } : { title: string, tag: string}) {
        return (
            <div className="header-layout">
                <div className="header-main">
                <PageHeader title={title} tag={tag} />
                <HeaderButton text="Explore more listings" />
            </div>

            <nav className="category-strip">
            </nav>

            <div className="property-grid">
            </div>
        </div>
    )
}

export default SavedProperties