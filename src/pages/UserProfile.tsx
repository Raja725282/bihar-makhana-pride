

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { User, Home, Edit, Trash2, RefreshCw, Star, CreditCard, Save, X, Info } from 'lucide-react';

const dummyUser = {
  name: 'Raja Raj',
  email: 'raja@example.com',
  phone: '9876543210',
  avatar: 'https://ui-avatars.com/api/?name=Raja+Raj&background=golden&color=fff',
  addresses: [
    { id: 1, label: 'Home', address: '123 Main St, Patna, Bihar' },
    { id: 2, label: 'Office', address: 'ARS Group, Patna, Bihar' }
  ],
  transactions: [
    { id: 'TXN001', date: '2025-09-01', amount: 500, status: 'Completed' },
    { id: 'TXN002', date: '2025-09-15', amount: 250, status: 'Refunded' }
  ],
  orders: [
    { id: 'ORD001', product: 'Makhana 100g Pack of 1', rating: 5, returnStatus: 'None', exchangeStatus: 'None', img: '/src/assets/Product Front.jpg' },
    { id: 'ORD002', product: 'Makhana 100g Pack of 2', rating: 4, returnStatus: 'Requested', exchangeStatus: 'None', img: '/src/assets/Product Back.jpg' }
  ]
};

const tabs = [
  { key: 'profile', label: 'Profile Info', icon: <User className="w-4 h-4 mr-1" /> },
  { key: 'address', label: 'Address Management', icon: <Home className="w-4 h-4 mr-1" /> },
  { key: 'returns', label: 'Returns/Exchanges', icon: <RefreshCw className="w-4 h-4 mr-1" /> },
  { key: 'ratings', label: 'Ratings', icon: <Star className="w-4 h-4 mr-1" /> },
  { key: 'transactions', label: 'Transaction History', icon: <CreditCard className="w-4 h-4 mr-1" /> },
];


const UserProfile: React.FC = () => {
  const [user, setUser] = useState(dummyUser);
  const [newAddress, setNewAddress] = useState('');
  const [activeTab, setActiveTab] = useState('profile');
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({ name: user.name, email: user.email, phone: user.phone });
  const [editingAddressId, setEditingAddressId] = useState<number|null>(null);
  const [addressForm, setAddressForm] = useState({ label: '', address: '' });
  const [showTxnModal, setShowTxnModal] = useState<{open: boolean, txn?: any}>({open: false});

  // Profile edit/save
  const handleProfileEdit = () => setEditingProfile(true);
  const handleProfileCancel = () => {
    setEditingProfile(false);
    setProfileForm({ name: user.name, email: user.email, phone: user.phone });
  };
  const handleProfileSave = () => {
    setUser({ ...user, ...profileForm });
    setEditingProfile(false);
  };

  // Address add/edit/delete
  const handleAddAddress = () => {
    if (newAddress.trim()) {
      setUser({
        ...user,
        addresses: [...user.addresses, { id: Date.now(), label: 'Other', address: newAddress }]
      });
      setNewAddress('');
    }
  };
  const handleDeleteAddress = (id: number) => {
    setUser({
      ...user,
      addresses: user.addresses.filter(addr => addr.id !== id)
    });
  };
  const handleEditAddress = (addr: any) => {
    setEditingAddressId(addr.id);
    setAddressForm({ label: addr.label, address: addr.address });
  };
  const handleAddressSave = () => {
    setUser({
      ...user,
      addresses: user.addresses.map(addr => addr.id === editingAddressId ? { ...addr, ...addressForm } : addr)
    });
    setEditingAddressId(null);
    setAddressForm({ label: '', address: '' });
  };
  const handleAddressCancel = () => {
    setEditingAddressId(null);
    setAddressForm({ label: '', address: '' });
  };

  // Returns/Exchanges dummy request
  const handleRequestReturn = (id: string) => {
    setUser({
      ...user,
      orders: user.orders.map(order => order.id === id ? { ...order, returnStatus: 'Requested' } : order)
    });
  };
  const handleRequestExchange = (id: string) => {
    setUser({
      ...user,
      orders: user.orders.map(order => order.id === id ? { ...order, exchangeStatus: 'Requested' } : order)
    });
  };

  // Ratings dummy update
  const handleRateProduct = (id: string, rating: number) => {
    setUser({
      ...user,
      orders: user.orders.map(order => order.id === id ? { ...order, rating } : order)
    });
  };

  // Transaction modal
  const handleTxnInfo = (txn: any) => setShowTxnModal({ open: true, txn });
  const closeTxnModal = () => setShowTxnModal({ open: false });

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-golden/10 via-white to-heritage/10">
        <h1 className="text-4xl font-extrabold mb-8 text-golden drop-shadow-lg text-center tracking-wide">User Profile</h1>
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-golden/20">
          <div className="flex space-x-2 mb-8 border-b pb-4">
            <div className="w-full flex justify-center">
              <div className="inline-flex bg-white rounded-xl shadow-lg px-2 py-1 border border-golden/20">
                {tabs.map(tab => (
                  <button
                    key={tab.key}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-semibold flex items-center transition-all duration-200 whitespace-nowrap mx-1 relative
                      ${activeTab === tab.key ? 'bg-gradient-to-r from-golden to-heritage text-white scale-105 shadow-lg' : 'bg-gray-100 text-heritage hover:bg-golden/20 hover:scale-105'}
                    `}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.icon} {tab.label}
                    {activeTab === tab.key && (
                      <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-3 h-3 bg-golden rounded-full shadow-lg border-2 border-white"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {activeTab === 'profile' && (
            <div className="flex flex-col items-center">
              <img src={user.avatar} alt="avatar" className="w-24 h-24 rounded-full mb-4 border-4 border-golden shadow-lg" />
              <div className="bg-gradient-to-r from-golden/10 to-white rounded-xl p-6 w-full mb-2 shadow flex flex-col items-center border border-golden/10">
                {editingProfile ? (
                  <>
                    <input className="mb-2 px-4 py-2 border rounded-lg w-full focus:ring-golden" value={profileForm.name} onChange={e => setProfileForm({ ...profileForm, name: e.target.value })} />
                    <input className="mb-2 px-4 py-2 border rounded-lg w-full focus:ring-golden" value={profileForm.email} onChange={e => setProfileForm({ ...profileForm, email: e.target.value })} />
                    <input className="mb-2 px-4 py-2 border rounded-lg w-full focus:ring-golden" value={profileForm.phone} onChange={e => setProfileForm({ ...profileForm, phone: e.target.value })} />
                    <div className="flex gap-2 mt-2">
                      <button className="px-4 py-2 bg-gradient-to-r from-golden to-heritage text-white rounded-lg flex items-center shadow hover:scale-105" onClick={handleProfileSave}><Save className="w-4 h-4 mr-1" /> Save</button>
                      <button className="px-4 py-2 bg-gray-200 text-heritage rounded-lg flex items-center shadow hover:scale-105" onClick={handleProfileCancel}><X className="w-4 h-4 mr-1" /> Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-lg font-semibold mb-2">{user.name}</div>
                    <div className="mb-1 text-gray-700">{user.email}</div>
                    <div className="mb-1 text-gray-700">{user.phone}</div>
                    <button className="mt-4 px-4 py-2 bg-gradient-to-r from-golden to-heritage text-white rounded-lg flex items-center shadow hover:scale-105" onClick={handleProfileEdit}><Edit className="w-4 h-4 mr-1" /> Edit Profile</button>
                  </>
                )}
              </div>
            </div>
          )}

          {activeTab === 'address' && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-golden">Address Management</h2>
              <ul className="mb-4">
                {user.addresses.map(addr => (
                  <li key={addr.id} className="flex items-center justify-between bg-gradient-to-r from-golden/5 to-white rounded-xl p-4 mb-3 shadow border border-golden/10 transition-all duration-200 hover:scale-[1.02]">
                    {editingAddressId === addr.id ? (
                      <>
                        <input className="px-4 py-2 border rounded-lg mr-2 focus:ring-golden" value={addressForm.label} onChange={e => setAddressForm({ ...addressForm, label: e.target.value })} />
                        <input className="px-4 py-2 border rounded-lg mr-2 focus:ring-golden" value={addressForm.address} onChange={e => setAddressForm({ ...addressForm, address: e.target.value })} />
                        <button className="text-green-600 mr-2 hover:scale-110" onClick={handleAddressSave}><Save className="w-4 h-4" /></button>
                        <button className="text-gray-600 hover:scale-110" onClick={handleAddressCancel}><X className="w-4 h-4" /></button>
                      </>
                    ) : (
                      <>
                        <span><Home className="inline w-4 h-4 mr-1 text-golden" /><strong>{addr.label}:</strong> {addr.address}</span>
                        <div className="flex gap-2">
                          <button onClick={() => handleEditAddress(addr)} className="text-blue-500 hover:text-blue-700 hover:scale-110"><Edit className="w-4 h-4" /></button>
                          <button onClick={() => handleDeleteAddress(addr.id)} className="text-red-500 hover:text-red-700 hover:scale-110"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex items-center mt-2">
                <input
                  type="text"
                  value={newAddress}
                  onChange={e => setNewAddress(e.target.value)}
                  placeholder="Add new address"
                  className="border px-4 py-2 mr-2 rounded-lg focus:ring-golden"
                />
                <button onClick={handleAddAddress} className="bg-gradient-to-r from-golden to-heritage text-white px-4 py-2 rounded-lg flex items-center shadow hover:scale-105"><Home className="w-4 h-4 mr-1" /> Add</button>
              </div>
            </div>
          )}

          {activeTab === 'returns' && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-golden">Returns / Exchanges</h2>
              <ul>
                {user.orders.map(order => (
                  <li key={order.id} className="flex items-center justify-between bg-gradient-to-r from-golden/5 to-white rounded-xl p-4 mb-3 shadow border border-golden/10 transition-all duration-200 hover:scale-[1.02]">
                    <span><img src={order.img} alt="product" className="w-10 h-10 object-cover rounded mr-2 border" /><strong>{order.product}</strong></span>
                    <span className="flex gap-2 items-center">
                      <span className={`px-2 py-1 rounded text-xs font-semibold shadow ${order.returnStatus === 'Requested' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{order.returnStatus === 'None' ? 'No Return' : order.returnStatus}</span>
                      <button className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg text-xs shadow hover:scale-105" onClick={() => handleRequestReturn(order.id)}>Request Return</button>
                      <span className={`px-2 py-1 rounded text-xs font-semibold shadow ${order.exchangeStatus === 'Requested' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>{order.exchangeStatus === 'None' ? 'No Exchange' : order.exchangeStatus}</span>
                      <button className="px-3 py-1 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg text-xs shadow hover:scale-105" onClick={() => handleRequestExchange(order.id)}>Request Exchange</button>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'ratings' && (
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-golden">Ratings</h2>
              <ul>
                {user.orders.map(order => (
                  <li key={order.id} className="flex flex-col sm:flex-row items-start sm:items-center bg-gradient-to-r from-golden/5 to-white rounded-xl p-3 sm:p-4 mb-2 sm:mb-3 shadow border border-golden/10 transition-all duration-200 hover:scale-[1.02]">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <img src={order.img} alt="product" className="w-10 h-10 object-cover rounded mr-2 border shadow" />
                      <span className="font-semibold mr-2">{order.product}</span>
                    </div>
                    <span className="flex gap-1">
                      {[1,2,3,4,5].map(star => (
                        <button key={star} onClick={() => handleRateProduct(order.id, star)} className="transition-transform duration-150 hover:scale-125">
                          <Star className={`w-5 h-5 ${star <= order.rating ? 'text-yellow-500 drop-shadow' : 'text-gray-300'}`} />
                        </button>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'transactions' && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-golden">Transaction History</h2>
              <table className="w-full text-sm bg-gradient-to-r from-golden/5 to-white rounded-xl shadow border border-golden/10">
                <thead>
                  <tr className="bg-gradient-to-r from-golden to-heritage text-white">
                    <th className="p-3 text-left">Txn ID</th>
                    <th className="p-3 text-left">Date</th>
                    <th className="p-3 text-left">Amount</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Info</th>
                  </tr>
                </thead>
                <tbody>
                  {user.transactions.map(txn => (
                    <tr key={txn.id} className="border-b hover:bg-golden/10 transition-all duration-150">
                      <td className="p-3 font-semibold">{txn.id}</td>
                      <td className="p-3">{txn.date}</td>
                      <td className="p-3 text-green-600">₹{txn.amount}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs font-semibold shadow ${txn.status === 'Refunded' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{txn.status}</span>
                      </td>
                      <td className="p-3">
                        <button onClick={() => handleTxnInfo(txn)} className="text-blue-500 hover:scale-110"><Info className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {showTxnModal.open && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 w-96 relative border border-golden/20">
                    <button className="absolute top-2 right-2 text-gray-500 hover:scale-110" onClick={closeTxnModal}><X className="w-5 h-5" /></button>
                    <h3 className="text-2xl font-bold mb-4 text-golden text-center">Transaction Details</h3>
                    <div className="mb-3"><strong>ID:</strong> {showTxnModal.txn.id}</div>
                    <div className="mb-3"><strong>Date:</strong> {showTxnModal.txn.date}</div>
                    <div className="mb-3"><strong>Amount:</strong> ₹{showTxnModal.txn.amount}</div>
                    <div className="mb-3"><strong>Status:</strong> <span className={`px-2 py-1 rounded text-xs font-semibold shadow ${showTxnModal.txn.status === 'Refunded' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{showTxnModal.txn.status}</span></div>
                    <div className="mb-3"><strong>Details:</strong> Dummy details for transaction.</div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UserProfile;
