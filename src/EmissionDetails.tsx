import React from "react";

const EmissionDetails: React.FC = () => {
  // これらは仮のデータです。実際のアプリではサーバーやデータベースから取得します。
  const productDetails = "商品名：商品A, 炭素排出量：20kg"; // 商品ごとの炭素排出量の詳細情報
  const calculationParams = "計算パラメータ：XXX"; // 炭素排出量を計算するためのパラメータ
  const emissionHistory = "過去の排出量：XXX"; // 商品の炭素排出量の歴史データ

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl p-8 bg-white rounded shadow">
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">炭素排出量確認</h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-2">
                商品ごとの炭素排出量詳細
              </h2>
              <p>{productDetails}</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-2">
                排出量計算パラメータ
              </h2>
              <p>{calculationParams}</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-2">
                炭素排出量の歴史データ
              </h2>
              <p>{emissionHistory}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmissionDetails;
