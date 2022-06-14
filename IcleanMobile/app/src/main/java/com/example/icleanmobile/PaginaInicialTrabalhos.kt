package com.example.icleanmobile

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.content.Context
import android.widget.LinearLayout
import android.widget.Toast
import androidx.appcompat.widget.AppCompatTextView
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import java.lang.ClassCastException

class PaginaInicialTrabalhos : Fragment() {
    private lateinit var listener : TrabalhoSelecionado
    var listaTrabalhos : ArrayList<Trabalho> = arrayListOf()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val view = inflater.inflate(R.layout.fragment_pagina_inicial_trabalhos, container, false)
        retornarTrabalhos(view)
        return view
    }

    fun retornarTrabalhos(v: View) {
        val getTrabalhos = ApiIclean.criar().getAllJobs()
        getTrabalhos.enqueue(object : Callback<Array<Trabalho>> {
            override fun onResponse(
                call: Call<Array<Trabalho>>,
                response: Response<Array<Trabalho>>
            ) {
                if(response.isSuccessful){
                    val body = response.body()
                    if(listaTrabalhos.isNotEmpty())listaTrabalhos.clear()

                    body?.forEach{ trabalho ->
                        listaTrabalhos.add(trabalho)
                    }

                    val activity = activity as Context
                    val recyclerView = v.findViewById<RecyclerView>(R.id.frag_contratada)
                    recyclerView.layoutManager = LinearLayoutManager(activity)
                    recyclerView.adapter = ListaTrabalhoAdapter()
                }
            }

            override fun onFailure(call: Call<Array<Trabalho>>, t: Throwable) {
                Toast.makeText(context, "ERRO NA API", Toast.LENGTH_SHORT).show()
            }
        })
    }

    internal inner class ListaTrabalhoAdapter : RecyclerView.Adapter<ViewHolder>() {

        override fun onCreateViewHolder(viewGroup: ViewGroup, viewType: Int) =
            ViewHolder(
                LayoutInflater.from(context).inflate(
                    R.layout.trabalho_item, viewGroup, false
                )
            )

        override fun onBindViewHolder(viewHolder: ViewHolder, position: Int) {
            val trabalho = Trabalho(
                listaTrabalhos[position].id,
                listaTrabalhos[position].proprietaria,
                listaTrabalhos[position].candidatas,
                listaTrabalhos[position].preco,
                listaTrabalhos[position].especificacao,
                listaTrabalhos[position].cep,
                listaTrabalhos[position].complemento,
                listaTrabalhos[position].numero,
                listaTrabalhos[position].longitude,
                listaTrabalhos[position].latitude,
            )
            viewHolder.bind(trabalho)
            viewHolder.itemView.findViewById<LinearLayout>(R.id.ll_servico)
                .setOnClickListener {
                    listener.selecionarTrabalho(trabalho)
                }
        }

        override fun getItemCount() = listaTrabalhos.size
    }

    override fun onAttach(context: Context) {
        super.onAttach(context)

        if (context is TrabalhoSelecionado) {
            listener = context
        } else {
            throw ClassCastException("$context must implemented")
        }
    }

    internal inner class ViewHolder constructor(itemView: View) :
        RecyclerView.ViewHolder(itemView) {
        fun bind(trabalho: Trabalho) {
            itemView.findViewById<AppCompatTextView>(R.id.tv_titulo_trabalho).text = trabalho.especificacao
            // itemView.findViewById<AppCompatTextView>(R.id.tv_nome_propietaria).text = trabalho.proprietaria!!.nome
            itemView.findViewById<AppCompatTextView>(R.id.tv_cep_trabalho).text = trabalho.cep
        }
    }

    interface TrabalhoSelecionado{
        fun selecionarTrabalho(trabalho:Trabalho)
    }
}