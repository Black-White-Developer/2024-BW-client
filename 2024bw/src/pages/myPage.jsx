import NavBar from "../components/navBar";

import useUserStore from "../store/useUserStore";
import { useNavigate } from "react-router-dom";

import profile from "../image/profile-image.svg";
import {toast} from "react-toastify";
import {useEffect} from "react";

const MyPage = () => {
    const { user } = useUserStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
            toast.error('유저 정보가 존재하지 않습니다.')
        }
    }, [])

    return (
        <>
            <NavBar/>
            <div className="w-full mt-20 flex flex-col gap-8 items-center">
                <p className="w-2/3 text-center text-xl font-bold rounded-lg py-2 border shadow min-w-[400px]">{user.name}님의 페이지</p>

                <div className="w-2/3 flex gap-8 bg-white py-12 border shadow rounded-lg justify-center">
                    <img src={user.avatar || profile} alt="profile" className="w-28 rounded-full"/>

                    <div className="flex flex-col gap-4">
                        <input type="text" placeholder="닉네임" className="w-72 px-4 py-2 border rounded-lg shadow-sm" value={user.name} />
                        <input type="number" placeholder="레벨" className="w-72 px-4 py-2 border rounded-lg shadow-sm" value={user.level} disabled={true}/>
                        <input type="text" placeholder="이메일" className="w-72 px-4 py-2 border rounded-lg shadow-sm" value={user.email} disabled={true}/>
                    </div>
                </div>

                <p className="w-2/3 mt-12 text-center text-xl font-bold rounded-lg py-2 shadow border min-w-[400px]">내가 쓴 글</p>

                <table className="w-2/3 border-collapse bg-white shadow rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="text-left px-6 py-3 border-b border-gray-200 font-semibold text-gray-700">제목</th>
                        <th className="text-left px-6 py-3 border-b border-gray-200 font-semibold text-gray-700">작성일</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="px-6 py-2 border-b border-gray-200 text-gray-600">제목</td>
                        <td className="px-6 py-2 border-b border-gray-200 text-gray-600">작성일</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyPage;