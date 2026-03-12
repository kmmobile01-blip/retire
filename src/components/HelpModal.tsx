import React, { useState } from 'react';
import { X, BookOpen, HelpCircle, FileText, CheckCircle, Sliders, BarChart3, ArrowRight, MousePointerClick, RefreshCw, Lock, Sparkles, Database, Printer, FileDown } from 'lucide-react';

interface HelpModalProps {
    onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState<'usage' | 'faq' | 'manual'>('usage');

    const tabs = [
        { id: 'usage', label: '使い方', icon: MousePointerClick },
        { id: 'faq', label: 'よくある質問', icon: HelpCircle },
        { id: 'manual', label: '計算仕様', icon: BookOpen },
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
            
            <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-white">
                        <div className="p-2 bg-indigo-500 rounded-lg">
                            <HelpCircle className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-bold">ヘルプ・マニュアル</h2>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-slate-200 bg-slate-50 px-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center gap-2 px-6 py-4 text-sm font-bold transition-all relative ${
                                activeTab === tab.id 
                                ? 'text-indigo-600' 
                                : 'text-slate-500 hover:text-slate-700'
                            }`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                            {activeTab === tab.id && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-t-full"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    {activeTab === 'usage' && (
                        <div className="space-y-8">
                            <section>
                                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <div className="w-1.5 h-6 bg-indigo-500 rounded-full"></div>
                                    基本的な操作の流れ
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 font-bold mb-4 border border-slate-100">1</div>
                                        <h4 className="font-bold mb-2">データの読込</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            「社員データの読込」からCSVファイルをアップロードするか、サンプルデータを使用します。
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 font-bold mb-4 border border-slate-100">2</div>
                                        <h4 className="font-bold mb-2">条件の設定</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            パターンA（現状）とパターンB（新制度案）の定年年齢や昇給率を設定します。
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 font-bold mb-4 border border-slate-100">3</div>
                                        <h4 className="font-bold mb-2">シミュレーション</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            「シミュレーション実行」をクリックして、将来の退職金コスト推移を分析します。
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                                <h3 className="text-indigo-900 font-bold mb-3 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-indigo-600" />
                                    AI分析レポート機能
                                </h3>
                                <p className="text-sm text-indigo-800 leading-relaxed mb-4">
                                    シミュレーション結果に基づき、AIが制度移行のメリット・デメリットや改善案を自動生成します。
                                    「AI分析レポート」ボタンから、プロフェッショナルな報告書を作成可能です。
                                </p>
                                <div className="flex items-center gap-2 text-xs font-bold text-indigo-600">
                                    <CheckCircle className="w-4 h-4" /> 財務インパクトの可視化
                                    <CheckCircle className="w-4 h-4 ml-2" /> 制度設計の最適化アドバイス
                                </div>
                            </section>
                        </div>
                    )}

                    {activeTab === 'faq' && (
                        <div className="space-y-4">
                            {[
                                { q: 'CSVのフォーマットが分かりません', a: '「マスタ設定」画面から現在の設定をCSVとしてダウンロードできます。その形式に合わせてデータを作成してください。' },
                                { q: '定年延長のコストを正確に把握したい', a: 'パターンBで定年年齢を65歳に設定し、再雇用時の給与水準（係数）を調整することで、総人件費と退職金のバランスをシミュレーションできます。' },
                                { q: 'AI分析が動きません', a: 'Gemini APIキーが正しく設定されているか確認してください。設定メニューからキーの入力が可能です。' },
                                { q: '計算結果を保存したい', a: '「PDF出力」または「Excel出力」機能をご利用ください。グラフも含めた状態で保存可能です。' }
                            ].map((item, i) => (
                                <div key={i} className="border border-slate-200 rounded-2xl p-5 hover:bg-slate-50 transition-colors">
                                    <div className="font-bold text-slate-800 mb-2 flex items-start gap-3">
                                        <span className="text-indigo-500">Q.</span>
                                        {item.q}
                                    </div>
                                    <div className="text-sm text-slate-600 pl-7 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'manual' && (
                        <div className="prose prose-slate max-w-none">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                <h4 className="text-slate-800 font-bold mb-4">退職金計算ロジック</h4>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 mt-0.5 text-indigo-500 shrink-0" />
                                        <span><strong>基本式:</strong> 退職時の職能ポイント × ポイント単価 × 退職事由係数</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 mt-0.5 text-indigo-500 shrink-0" />
                                        <span><strong>ポイント累計:</strong> 毎年の評価に基づきポイントが加算されます。昇給率設定により将来のポイントを予測します。</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 mt-0.5 text-indigo-500 shrink-0" />
                                        <span><strong>定年延長対応:</strong> 定年後の再雇用期間については、別途設定された「再雇用係数」を乗じて計算します。</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 border border-slate-200 rounded-xl">
                                    <div className="flex items-center gap-2 font-bold text-slate-700 mb-2">
                                        <Database className="w-4 h-4 text-slate-400" />
                                        マスタデータ
                                    </div>
                                    <p className="text-xs text-slate-500">
                                        職位別・勤続年数別のポイントテーブルを保持。T1（旧制度）とT2（新制度）の切り替えに対応。
                                    </p>
                                </div>
                                <div className="p-4 border border-slate-200 rounded-xl">
                                    <div className="flex items-center gap-2 font-bold text-slate-700 mb-2">
                                        <RefreshCw className="w-4 h-4 text-slate-400" />
                                        端数処理
                                    </div>
                                    <p className="text-xs text-slate-500">
                                        計算過程のポイントおよび最終金額について、四捨五入・切り捨て・切り上げの設定が可能です。
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="bg-slate-50 px-8 py-4 border-t border-slate-200 flex justify-between items-center">
                    <p className="text-xs text-slate-400 font-medium">
                        Retirement Simulation System v2.0.0
                    </p>
                    <button 
                        onClick={onClose}
                        className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-xl active:scale-95"
                    >
                        閉じる
                    </button>
                </div>
            </div>
        </div>
    );
};
