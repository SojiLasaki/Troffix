import PageHeader from '../components/page-header';
import HeaderButton from '../components/header-button';
import '../styles/mains.css';

function Tours({ title, tag }: { title: string, tag: string }) {
    return (
        <>
            <div className="header-layout">
                <div className="header-main">
                    <PageHeader title={title} tag={tag} />
                    <HeaderButton text="Create New Tour" />
                </div>
            </div>
        </>
    )
}
export default Tours;