import Layout from '../../components/Layout';

interface UserProps {
    dataUsers: Array<any>;
}

export default function index(props: UserProps) {
    const { dataUsers } = props;
    console.log(dataUsers);

    return (
        <Layout pageTitle='Users Page'>
            <h1>Users Page</h1>

            {dataUsers.map(user => {
                return (
                    <>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </>
                )
            })}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();

    return {
        props: {
            dataUsers: dataUsers,
        },
    };
}