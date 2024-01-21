import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";


const RoomDetails = () => {
    const { id } = useParams()
    const [room, setRoom] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id)
                setRoom(singleRoom)
                setLoading(false)
            })
    }, [id])

    if (loading) return <Loader />
    return (
        <Container>
            <Helmet>
                <title>{room.title}</title>
            </Helmet>
            <div>
                <div className="flex flex-col gap-6">
                    <Header room={room}></Header>
                </div>
                <div>
                    <RoomInfo room={room}></RoomInfo>
                </div>
                {/* calender */}
            </div>
        </Container>
    );
};

export default RoomDetails;