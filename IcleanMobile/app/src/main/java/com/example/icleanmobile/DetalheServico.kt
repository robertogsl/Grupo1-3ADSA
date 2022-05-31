package com.example.icleanmobile

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView

class DetalheServico : Fragment() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val view = inflater.inflate(R.layout.fragment_detalhe_servico, container, false)
        val trabalho = arguments?.getSerializable("detalheTrabalho") as Trabalho
        view.findViewById<TextView>(R.id.tv_titulo_detalhe).text = trabalho.especificacao
        view.findViewById<TextView>(R.id.tv_cep_detalhe).text = trabalho.cep
        view.findViewById<TextView>(R.id.tv_descricao_detalhe).text = trabalho.proprietaria!!.nome
        return view
    }
}