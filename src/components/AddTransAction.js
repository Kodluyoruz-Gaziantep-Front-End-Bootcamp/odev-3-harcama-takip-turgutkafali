import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { toast } from "react-toastify";

const AddTransAction = () => {
    function warning(msg) {
        toast.warning(msg);
      }
      function success(msg) {
        toast.success(msg);
      }
    const { addTransaction } = useContext(GlobalContext)
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const handlerSubmit = (e) => {
        if (!text || !amount) {
            warning('Tüm alanları doldurunuz.')
        } else {
            const newTransaction = {
                id: Math.floor(Math.random() * 10000000000),
                text,
                amount: + amount
            }
            if (amount > 50000) {
                if (window.confirm('Miktardan emin misiniz?')) {
                    addTransaction(newTransaction);
                    success('Başarılı bir şekilde kaydedildi')
                }else {
                    alert('Miktarınızı tekrardan kontrol ediniz.')
                }
            } else {
                addTransaction(newTransaction);
                success('Başarılı bir şekilde kaydedildi')
            }
            setAmount(0)
            setText('')
        }
        e.preventDefault();
    }

    return (
        <>
            <h3>Yeni işlem ekleme</h3>
            <form onSubmit={handlerSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Harcama Türü</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Metin gir...' />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Tutar <br /> (giderler eksi - gelirler artı)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Miktar gir...' />
                </div>
                <button className={!amount || !text ? 'btn2' : 'btn'} disabled={!amount || !text}>
                    {!amount || !text ? 'Alanları doldurunuz' : 'İşlem Ekle'}
                </button>
            </form>
        </>
    )
}

export default AddTransAction