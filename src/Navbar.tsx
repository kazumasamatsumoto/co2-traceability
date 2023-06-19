import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 bg-white shadow-md mb-8">
      <div className="max-w-7xl mx-auto flex justify-between">
        <Link to="/" className="font-bold text-xl">CO2 Traceability</Link>
        <div className="flex gap-4">
          <Link to="/emission-details" className="text-blue-500">炭素排出量確認</Link>
          <Link to="/nft" className="text-blue-500">炭素削減証明書（NFT）</Link>
          <Link to="/points" className="text-blue-500">ポイント管理</Link>
          <Link to="/settings" className="text-blue-500">設定</Link>
          <Link to="/info-help" className="text-blue-500">情報・ヘルプ</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
