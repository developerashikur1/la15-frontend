import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAddToFinishedListMutation, useAddToReadingListMutation, useGetUserProfileQuery, useRemoveFromFinishedListMutation } from "../redux/features/auth/authApi";
import { updateUserInfo } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { IBook } from "../types/book-type";

const listButtons = [
  { id: 1, name: "Wishlist" },
  { id: 2, name: "Reading List" },
  { id: 3, name: "Finished List" },
];

// type IBookList = IBook && {

// }

const MyListPage = () => {
  const [list, setList] = useState<IBook[]>([]); // Change the initial state to an empty array of IBook
  const [select, setSelect] = useState<number | null>(1);
    const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.auth);
  const {data: profileData, isSuccess: profileSuccess} = useGetUserProfileQuery(undefined);

  
  useEffect(() => {
    if(profileSuccess){
        if(profileData.statusCode === 200){
            const updateData = profileData.data;
            dispatch(updateUserInfo(updateData));
        }
    }
  }, [profileData, profileSuccess])



  useEffect(() => {
    if (userInfo) {
      // Ensure userInfo is not undefined
      if (select === 1) {
        setList(userInfo.wishlist || []);
      } else if (select === 2) {
        setList(userInfo.readingList || []);
      } else if (select === 3) {
        setList(userInfo.finishedList || []);
      }
    }
  }, [select, userInfo]);

  
const [addToReadingList] = useAddToReadingListMutation(undefined);
const [addToFinishedList] = useAddToFinishedListMutation(undefined);
const [removeFromFinishedList] = useRemoveFromFinishedListMutation(undefined);
  
  const handleAction = async (payload: string) =>{
    try {
        const data = {
            bookId: payload,
        }
        if(select === 1){
            const result = await addToReadingList(data)
            if(result){
                toast.success("Added to readinglist successfully");
                console.log(result, 'added to readinglist');
            }
        }
        if(select === 2){
            const result = await addToFinishedList(data)
            if(result){
                toast.success("Added to finish successfully")
                console.log(result, 'added to finishedlist');
            }
        }
        if(select === 3){
            const result = await removeFromFinishedList(data)
            if(result){
                console.log(result);
                toast.success("Removed from finished successfully")
                console.log(result, 'added to remove from finishedlist');
            }
        }
    } catch (err) {
        console.log(err);
    }
}


  return (
    <div>
      <div className="tabs tabs-boxed my-12 py-6">
        {listButtons.map((item, index) => (
          <a
            key={index}
            onClick={() => setSelect(item.id)}
            className={`tab ${select === item.id ? "tab-active" : ""}`}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="overflow-x-auto mb-16">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name & Genre</th>
              <th>Publication Date</th>
              <th>Status</th>
              <th>Actions</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <th>
              </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask h-[200px] w-[140px]">
                        <img
                          src={item?.bookImage}
                          alt="Avatar Tailwind CSS Component"
                          className="w-[60px] h-[120px]"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.title}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item.genre}
                  </span>
                </td>
                <td>{item.publicationDate}</td>
                <td>{listButtons[select as number - 1].name}</td>
                <th>
                  <button onClick={() => handleAction(item._id as string)} className="btn btn-ghost bg-green-500 btn-xs">
                      {
                          select !== 3 ?
                          `Mark As ${select === 1 ? "Reading" : "Finished" } List` :
                          `Remove from Finished list` 
                      }
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListPage;
