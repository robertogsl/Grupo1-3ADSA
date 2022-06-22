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
import com.example.icleanmobile.databinding.FragmentPaginaInicialTrabalhosBinding
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import java.lang.ClassCastException
import java.util.ArrayList

class PaginaInicialTrabalhos : Fragment() {
    private lateinit var binding : FragmentPaginaInicialTrabalhosBinding
    private lateinit var listener : TrabalhoSelecionado
    private lateinit var recyclerView: RecyclerView;
    private lateinit var adapter : TrabalhosAdapter;
    private lateinit var layoutManager: LinearLayoutManager;
//    var listaTrabalhos : ArrayList<Trabalho> = arrayListOf()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        binding = FragmentPaginaInicialTrabalhosBinding.inflate(layoutInflater)
        val view = binding.root;

        retornarTrabalhos(view)

        recyclerView = binding.fragContratada;
        setRecyclerView();



        return view
    }

    fun setRecyclerView(){
        //SETA A RECYCLERVIEW
        layoutManager = LinearLayoutManager(context)
        recyclerView.layoutManager = layoutManager;
        adapter = TrabalhosAdapter()
        recyclerView.adapter = adapter;
    }

    fun retornarTrabalhos(v: View) {
        val getTrabalhos = ApiIclean.criar().getAllJobs2()
        getTrabalhos.enqueue(object : Callback<ArrayList<Trabalho>> {
            override fun onResponse(
                call: Call<ArrayList<Trabalho>>,
                response: Response<ArrayList<Trabalho>>
            ) {
                if(response.isSuccessful){

                    val listaTrabalho = response.body()!!
                    adapter.addList(listaTrabalho)

//                    val body = response.body()
//                    if(listaTrabalhos.isNotEmpty())listaTrabalhos.clear()
//
//                    body?.forEach{ trabalho ->
//                        listaTrabalhos.add(trabalho)
//                    }

//                    val activity = activity as Context
//                    val recyclerView = v.findViewById<RecyclerView>(R.id.frag_contratada)
//                    recyclerView.layoutManager = LinearLayoutManager(activity)
//                    recyclerView.adapter = TrabalhosAdapter(listaTrabalhos)
                }
            }

            override fun onFailure(call: Call<ArrayList<Trabalho>>, t: Throwable) {
                Toast.makeText(context, "ERRO NA API", Toast.LENGTH_SHORT).show()
            }
        })
    }

    override fun onAttach(context: Context) {
        super.onAttach(context)

        if (context is TrabalhoSelecionado) {
            listener = context
        } else {
            throw ClassCastException("$context must implemented")
        }
    }

    interface TrabalhoSelecionado{
        fun selecionarTrabalho(trabalho:Trabalho)
    }
}