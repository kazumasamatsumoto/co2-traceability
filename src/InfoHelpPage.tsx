import React from "react";

const InfoHelpPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl p-8 bg-white rounded shadow">
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">情報・ヘルプ</h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-2">
                アプリケーションの使い方、FAQ
              </h2>
              {/* 使い方やFAQのインターフェースをここに追加 */}
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-2">
                環境保全に関する情報や、サービスの背景についての教育的なコンテンツ
              </h2>
              {/* 教育的なコンテンツのインターフェースをここに追加 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoHelpPage;
