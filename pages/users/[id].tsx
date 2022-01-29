import { useRouter } from 'next/router';

export default function UserDetail() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Users Detail Page {id}</h1>
        </div>
    )
}
