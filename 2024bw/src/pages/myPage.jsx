import NavBar from "../components/navBar";
import useUserStore from "../store/useUserStore";
import profile from "../image/profile-image.svg";
import { useEffect, useState, useRef } from "react";
import axiosInstance from "../util/axiosInstance";
import { toast } from "react-toastify";

const MyPage = () => {
    const { user, setUser } = useUserStore();
    const [nickname, setNickname] = useState('');
    const fileInputRef = useRef(null);

    useEffect(() => {
        setNickname(user?.nickname || '');
    }, [user]);

    const onChangeClick = async () => {
        const response = await axiosInstance.put('/user/my/info', { nickname });
        if (response) {
            setUser({ ...user, nickname });
            toast.success('닉네임을 수정했습니다.');
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click(); // Trigger the file input click
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('avatar', file);

        const response = await axiosInstance.put('/user/my/avatar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response) {
            setUser({ ...user, avatar: URL.createObjectURL(file) });
            toast.success('프로필 사진이 변경되었습니다.');
        }
    };

    if (!user) return null;

    return (
        <>
            <NavBar />
            <div className="w-full mt-20 flex flex-col gap-8 items-center">
                <p className="w-2/3 text-center text-xl font-bold rounded-lg py-2 border shadow min-w-[400px]">{user.nickname}님의 페이지</p>

                <div className="w-2/3 flex gap-16 bg-white py-12 border shadow rounded-lg justify-center items-center">
                    <img
                        src={user.avatar || profile}
                        alt="profile"
                        className="w-40 h-40 rounded-full cursor-pointer"
                        onClick={handleImageClick}
                    />
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleFileChange}
                    />

                    <div className="flex flex-col gap-4 w-72">
                        <div>
                            <label className="text-sm">프로필</label>
                            <input
                                type="text"
                                placeholder="닉네임"
                                onChange={(e) => setNickname(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg shadow-sm"
                                value={nickname}
                            />
                        </div>

                        <div>
                            <label className="text-sm">계정 정보</label>
                            <input
                                type="number"
                                placeholder="레벨"
                                className="w-full px-4 py-2 border rounded-lg shadow-sm"
                                value={user.level}
                                disabled={true}
                            />
                        </div>

                        <div>
                            <label className="text-sm">이메일</label>
                            <input
                                type="text"
                                placeholder="이메일"
                                className="w-full px-4 py-2 border rounded-lg shadow-sm"
                                value={user.email}
                                disabled={true}
                            />
                        </div>

                        <button
                            className="w-full bg-blue-500 text-white text-sm rounded-md py-2 mt-4"
                            onClick={onChangeClick}
                        >
                            수정
                        </button>
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
