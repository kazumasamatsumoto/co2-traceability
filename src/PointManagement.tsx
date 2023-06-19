import React from 'react';

const PointManagement: React.FC = () => {
    // これらは仮のデータです。実際のアプリではサーバーやデータベースから取得します。
    const pointHistory = '最近の活動：20ポイント獲得, 10ポイント利用';  // ポイントに関連する活動の歴史

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl p-8 bg-white rounded shadow">
                <div className="col-span-1 md:col-span-2">
                    <h1 className="text-2xl font-bold mb-4">ポイント管理</h1>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 bg-white rounded shadow">
                            <h2 className="text-xl font-semibold mb-2">ポイント活動の歴史</h2>
                            <p>{pointHistory}</p>
                        </div>
                        {/* ポイントの獲得、利用、保有のためのインターフェースをここに追加 */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PointManagement;
