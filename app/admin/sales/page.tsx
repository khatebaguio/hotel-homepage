"use client";

import React, { useState, useEffect } from 'react';
import {
  DollarSign,
  TrendingUp,
  Search,
  Filter,
  Download,
  CheckCircle2,
  Clock,
  XCircle,
  Calendar
} from 'lucide-react';

interface SaleTransaction {
  id: string;
  customer: string;
  item: string;
  amount: string;
  date: string;
  status: 'Completed' | 'Pending' | 'Refunded';
}

export default function SalesManagement() {
  const [sales, setSales] = useState<SaleTransaction[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedSales = localStorage.getItem('admin_sales');
    if (storedSales) {
      setSales(JSON.parse(storedSales));
    } else {
      // Seed initial data from bookings and mock transactions
      const defaultSales: SaleTransaction[] = [
        { id: 'TXN-8821', customer: 'John Doe', item: 'Deluxe Room (4 Nights)', amount: '₱18,000', date: '2026-05-28', status: 'Completed' },
        { id: 'TXN-9902', customer: 'Sarah Jenkins', item: 'Suite Room (2 Nights)', amount: '₱12,000', date: '2026-05-29', status: 'Pending' },
        { id: 'TXN-7741', customer: 'Michael Chen', item: 'Presidential Suite (5 Nights)', amount: '₱75,000', date: '2026-05-25', status: 'Completed' },
        { id: 'TXN-1123', customer: 'Anna Smith', item: 'Superior Room (1 Night)', amount: '₱3,500', date: '2026-05-29', status: 'Completed' },
      ];
      setSales(defaultSales);
      localStorage.setItem('admin_sales', JSON.stringify(defaultSales));
    }
  }, []);

  const filteredSales = sales.filter(s => 
    s.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalRevenue = sales.reduce((acc, curr) => {
    if (curr.status === 'Completed') {
      const val = parseInt(curr.amount.replace(/[^0-9]/g, '')) || 0;
      return acc + val;
    }
    return acc;
  }, 0);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Sales & Revenue</h1>
          <p className="text-slate-500 text-sm">Monitor hotel earnings and transaction history</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors font-medium shadow-lg shadow-emerald-500/20">
          <Download size={18} />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
           <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl text-white">
              <TrendingUp size={24} />
           </div>
           <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Revenue</p>
              <p className="text-2xl font-bold text-slate-800">₱{totalRevenue.toLocaleString()}</p>
           </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
           <div className="bg-blue-100 text-blue-600 p-3 rounded-xl text-white">
              <DollarSign size={24} />
           </div>
           <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Today's Sales</p>
              <p className="text-2xl font-bold text-slate-800">₱15,500</p>
           </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
           <div className="bg-amber-100 text-amber-600 p-3 rounded-xl text-white">
              <Clock size={24} />
           </div>
           <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pending Payments</p>
              <p className="text-2xl font-bold text-slate-800">₱12,000</p>
           </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-white transition-colors">
            <Filter size={16} />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                <th className="px-6 py-4">Transaction ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredSales.map((txn) => (
                <tr key={txn.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-slate-800">
                    #{txn.id}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-800">{txn.customer}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {txn.item}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">
                    {txn.amount}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 w-fit ${
                      txn.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                      txn.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                      'bg-rose-100 text-rose-700'
                    }`}>
                      {txn.status === 'Completed' ? <CheckCircle2 size={10} /> : 
                       txn.status === 'Pending' ? <Clock size={10} /> : <XCircle size={10} />}
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                    {txn.date}
                  </td>
                </tr>
              ))}
              {filteredSales.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-slate-500">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
