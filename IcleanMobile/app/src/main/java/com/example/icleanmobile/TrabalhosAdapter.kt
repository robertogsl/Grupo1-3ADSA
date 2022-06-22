package com.example.icleanmobile

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import java.util.ArrayList

class TrabalhosAdapter : RecyclerView.Adapter<TrabalhosAdapter.ViewHolder>() {

    val listaTrabalhos = ArrayList<Trabalho>();

    fun addList(lista : ArrayList<Trabalho>){
        listaTrabalhos.addAll(lista);
        notifyDataSetChanged();
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TrabalhosAdapter.ViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.trabalho_item, parent, false);
        val viewHolder = TrabalhosAdapter.ViewHolder(view);
        return viewHolder;
    }

    override fun onBindViewHolder(holder: TrabalhosAdapter.ViewHolder, position: Int) {
        val card = listaTrabalhos[position];

        var titulo = card.especificacao.split(",".toRegex())

        holder.tituloTrabalho.text = titulo[0];
        holder.nomeProprietaria.text = "Maria do Carmo";
        holder.cep.text = card.cep;
        //ATRIBUIR O VALOR DA AO ITEM
        //EX : holder.nome = card.nome
    }

    override fun getItemCount() = listaTrabalhos.size;



    class ViewHolder (cardView : View) : RecyclerView.ViewHolder(cardView) {

        val tituloTrabalho   : TextView = cardView.findViewById(R.id.tv_titulo_trabalho)
        val cep              : TextView = cardView.findViewById(R.id.tv_cep_trabalho)
        val nomeProprietaria : TextView = cardView.findViewById(R.id.tv_nome_propietaria)
//            itemView.findViewById<AppCompatTextView>(R.id.tv_titulo_trabalho).text = trabalho.especificacao
//            // itemView.findViewById<AppCompatTextView>(R.id.tv_nome_propietaria).text = trabalho.proprietaria!!.nome
//            itemView.findViewById<AppCompatTextView>(R.id.tv_cep_trabalho).text = trabalho.cep
    }
}