export interface Room {
    totalRooms: number,
    availableRooms: number,
    bookedRooms: number
}


export interface RoomList {
    id?: string,
    roomNumber?: string,
    roomType: string,
    amenities: string,
    price: number,
    photos: string,
    checkintime: Date,
    checkouttime: Date,
    rating: number,
}