import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl p-8 bg-white rounded shadow">
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">ダッシュボード</h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-2">最新の炭素排出量</h2>
              {/* 最新の炭素排出量データを表示 */}
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-2">
                ユーザーの炭素削減証明書（NFT）の概観
              </h2>
              {/* ユーザーのNFTの概観データを表示 */}
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-2">
                ユーザーが保有するポイントの総数
              </h2>
              {/* ユーザーのポイントデータを表示 */}
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <Link
            to="/emission-details"
            className="p-4 bg-blue-500 text-white rounded shadow text-center"
          >
            炭素排出量確認
          </Link>
          <Link
            to="/nft"
            className="p-4 bg-blue-500 text-white rounded shadow text-center"
          >
            炭素削減証明書（NFT）
          </Link>
          <Link
            to="/points"
            className="p-4 bg-blue-500 text-white rounded shadow text-center"
          >
            ポイント管理
          </Link>
          <Link
            to="/settings"
            className="p-4 bg-blue-500 text-white rounded shadow text-center"
          >
            設定
          </Link>
          <Link
            to="/info-help"
            className="p-4 bg-blue-500 text-white rounded shadow text-center"
          >
            情報・ヘルプ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
