package com.example.icleanmobile

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.widget.TextView
import android.widget.LinearLayout
import android.view.ViewGroup
import android.widget.Toast
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.FragmentContainerView

class TrabalhoCtd : Fragment() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_trabalho_ctd, container, false)
    }


    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val llServico : LinearLayout = view.findViewById(R.id.ll_servico)

        val llCandidatas : LinearLayout = view.findViewById(R.id.ll_candidatas)
        val tvCandidata1 : TextView = view.findViewById(R.id.tv_cddt_1)
        val tvCandidata2 : TextView = view.findViewById(R.id.tv_cddt_2)
        val tvCandidata3 : TextView = view.findViewById(R.id.tv_cddt_3)
        val tvCandidata4 : TextView = view.findViewById(R.id.tv_cddt_4)
        val tvMensagemCddt : TextView = view.findViewById(R.id.tv_mensagem_candidatar)

        val tvTituloTrabalho : TextView = view.findViewById(R.id.tv_titulo_trabalho)
        val tvNomePropietaria : TextView = view.findViewById(R.id.tv_nome_propietaria)
        val tvCepTrabalho : TextView = view.findViewById(R.id.tv_cep_trabalho)

        // recuperando os argumentos enviados pela Activity
        val id = arguments!!.getInt("id")
        val titulo = arguments!!.getString("titulo")
        val propietaria = arguments!!.getString("propietaria")
        val cep = arguments!!.getString("cep")
        val candidatas = arguments!!.getInt("candidatas")
        if(candidatas == 0){
            tvMensagemCddt.visibility = View.VISIBLE
            llCandidatas.visibility = View.GONE
        }
        if(candidatas == 1){
            tvCandidata1.visibility = View.VISIBLE
        }
        if(candidatas == 2){
            tvCandidata1.visibility = View.VISIBLE
            tvCandidata2.visibility = View.VISIBLE
        }
        if(candidatas == 3){
            tvCandidata1.visibility = View.VISIBLE
            tvCandidata2.visibility = View.VISIBLE
            tvCandidata3.visibility = View.VISIBLE
        }
        if(candidatas == 4){
            tvCandidata1.visibility = View.VISIBLE
            tvCandidata2.visibility = View.VISIBLE
            tvCandidata3.visibility = View.VISIBLE
            tvCandidata4.visibility = View.VISIBLE
        }

        tvTituloTrabalho.text =  "Diarista - " + titulo
        tvNomePropietaria.text = propietaria
        tvCepTrabalho.text = cep

        llServico.setOnClickListener{

        }
    }
}