import PageHeader from '../components/page-header';
import HeaderButton from '../components/header-button';

function SavedSearches({ title, tag } : { title: string, tag: string }) {
    return (
        <>
            <div className="header-layout">
                <div className="header-main">
                        <PageHeader title={title} tag={tag} />
                    <HeaderButton text="Create New Search" />
                </div>
            </div>
        </>
    )
}
export default SavedSearches;




