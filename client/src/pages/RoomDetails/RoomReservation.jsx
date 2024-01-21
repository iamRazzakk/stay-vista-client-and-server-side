import { formatDistance } from "date-fns";
import Button from "../../components/Button/Button";
import Calender from "./Calender";
import { useState } from "react";

const RoomReservation = ({ room }) => {
    if (!room || !room.from || !room.to) {
        console.warn("Room or date properties are undefined.");
        return null;
    }
    const totalDates = parseInt(formatDistance(new Date(room.from), new Date(room?.to)).split(' ')[0])
    const totalPrice = totalDates * (room.price)
    console.log(totalPrice);
    const [value, setValue] = useState({
        startDate: new Date(room.to),
        endDate: new Date(room.from),
        key: 'selection',
    })

    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold">
                    $ {room?.price}
                </div>
                <div className="font-light text-neutral-600">
                    Night
                </div>
                <hr />
            </div>
            <div className="flex justify-center">
                <Calender value={value}></Calender>
            </div>
            <hr />
            <div className="p-4">
                <Button label={'Reserve'}></Button>
            </div>
            <hr />
            <div className="p-4 flex items-center justify-between font-semibold text-lg">
                <div>Total</div>
                <div>$ {totalPrice}</div>
            </div>
        </div>
    );
};

export default RoomReservation;