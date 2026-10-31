import PageHeader from '../components/page-header';
import HeaderButton from '../components/header-button';

function Bookings({ title, tag }: { title: string, tag: string }) {
    return (
        <>
            <div className="header-layout">
                <div className="header-main">
                    <PageHeader title={title} tag={tag} />
                    <HeaderButton text="Create New Booking" />
                </div>
            </div>
        </>
    )
}
export default Bookings;