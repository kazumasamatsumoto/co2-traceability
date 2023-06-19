import React from 'react';

const NFTPage: React.FC = () => {
    // これらは仮のデータです。実際のアプリではサーバーやデータベースから取得します。
    const nftDetails = 'NFT名：NFT A, 発行日：2023/07/20, 関連する炭素削減量：30kg, 価値：100pt';  // 各NFTの詳細

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl p-8 bg-white rounded shadow">
                <div className="col-span-1 md:col-span-2">
                    <h1 className="text-2xl font-bold mb-4">炭素削減証明書（NFT）</h1>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 bg-white rounded shadow">
                            <h2 className="text-xl font-semibold mb-2">NFTの詳細</h2>
                            <p>{nftDetails}</p>
                        </div>
                        {/* 発行、取引、保有のためのインターフェースをここに追加 */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NFTPage;
