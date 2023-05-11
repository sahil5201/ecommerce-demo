import { ProductLoading } from "@/components";

export default async function Loading() {

    return (
        <section style={{ padding: '80px 0' }}>
            <div className='container sub-container'>
                <div className="row">
                    <ProductLoading />
                </div>
            </div>
        </section>
    );
}