import Header from "../components/Header";
import {useParams} from 'react-router-dom'

function ProfilePage() {

  const pathParams = useParams()

  return (
    <main>
      <Header />
      <h1>Página do {pathParams.name}</h1>
    </main>
  );
}

export default ProfilePage;
