import { signIn, signOut, useSession } from 'next-auth/client';

export default function Admin() {

    const [session, loading] = useSession();

    if (session) {
        return (
            <>
                <button onClick={signOut}>Sign out</button>
            </>
        );
    } else {
        return (
            <>
                <button onClick={signIn}>Sign in</button>
            </>
        )
    }




};
