import React from "react";

const SettingsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl p-8 bg-white rounded shadow">
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">設定</h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-2">ユーザー情報管理</h2>
              {/* ユーザー情報管理のインターフェースをここに追加 */}
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-2">通知設定</h2>
              {/* 通知設定のインターフェースをここに追加 */}
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-2">
                その他のアプリケーション設定
              </h2>
              {/* その他のアプリケーション設定のインターフェースをここに追加 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
