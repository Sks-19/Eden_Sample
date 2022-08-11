import './pagination.css';

function Pagination() {
    return (
        <>
            <div class="pindicator">
                <div class="bullet current">
                    <span class="icon">1</span>
                </div>
                <div class="bullet next future">
                    <span class="icon">2</span>
                </div>
                <div class="bullet future">
                    <span class="icon">3</span>
                </div>
                <div class="bullet future">
                    <span class="icon">4</span>
                </div>
            </div>
        </>
    );
}

export default Pagination;