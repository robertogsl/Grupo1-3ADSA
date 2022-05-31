package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Button
import android.widget.Toast
import androidx.fragment.app.FragmentContainerView
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class TrabalhosContratada : AppCompatActivity(), PaginaInicialTrabalhos.TrabalhoSelecionado {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tela_principal_ctd)
    }

    lateinit var tvIconServices: TextView
    lateinit var tvIconInvites: TextView
    lateinit var tvIconReceived: TextView


    fun addWorksFragment(v:View) {
        val trasaction = supportFragmentManager.beginTransaction()
        trasaction.replace(R.id.ll_tela_principal, PaginaInicialTrabalhos::class.java, null)
        trasaction.commit()
        val btnTrabalhos = findViewById<Button>(R.id.btn_buscar_trabalho)
        btnTrabalhos.setVisibility(View.GONE)
    }

    override fun selecionarTrabalho(trabalho : Trabalho){
        val args = Bundle()
        args.putSerializable("detalheTrabalho", trabalho)
        val trasaction = supportFragmentManager.beginTransaction()
        trasaction.replace(R.id.ll_tela_principal, DetalheServico::class.java, args)
        trasaction.commit()
    }

    fun fragServicos(view: View) {
        findViewById<LinearLayout>(R.id.ll_fragmentos).removeAllViews()
        val transaction = supportFragmentManager.beginTransaction()

        tvIconServices = findViewById(R.id.tv_iconServices)
        tvIconInvites = findViewById(R.id.tv_iconInvites)
        tvIconReceived = findViewById(R.id.tv_iconReceived)

        tvIconServices.setBackgroundTintList(this.getResources().getColorStateList(R.color.colorPrimary));
        tvIconInvites.setBackgroundTintList(this.getResources().getColorStateList(R.color.black));
        tvIconReceived.setBackgroundTintList(this.getResources().getColorStateList(R.color.black));

        var x = 0
        while (x < 20) {
            val fragmento = FragmentContainerView(this)

            fragmento.id = View.generateViewId()
            findViewById<LinearLayout>(R.id.ll_fragmentos).addView(fragmento)
            transaction.add(fragmento.id, TrabalhoCtd::class.java, null)
            x++
        }

        transaction.commit()
    }

    fun fragConvites(view: View){
        findViewById<LinearLayout>(R.id.ll_fragmentos).removeAllViews()
        val transaction = supportFragmentManager.beginTransaction()

        tvIconServices = findViewById(R.id.tv_iconServices)
        tvIconInvites = findViewById(R.id.tv_iconInvites)
        tvIconReceived = findViewById(R.id.tv_iconReceived)

        tvIconServices.setBackgroundTintList(this.getResources().getColorStateList(R.color.black));
        tvIconInvites.setBackgroundTintList(this.getResources().getColorStateList(R.color.colorPrimary));
        tvIconReceived.setBackgroundTintList(this.getResources().getColorStateList(R.color.black));

        var x = 0
        while (x < 20) {
            val fragmento = FragmentContainerView(this)

            fragmento.id = View.generateViewId()
            findViewById<LinearLayout>(R.id.ll_fragmentos).addView(fragmento)
            transaction.add(fragmento.id, ConviteCtd::class.java, null)
            x++
        }
        transaction.commit()
    }

    fun fragReceived(view: View){
        findViewById<LinearLayout>(R.id.ll_fragmentos).removeAllViews()
        val transaction = supportFragmentManager.beginTransaction()

        tvIconServices = findViewById(R.id.tv_iconServices)
        tvIconInvites = findViewById(R.id.tv_iconInvites)
        tvIconReceived = findViewById(R.id.tv_iconReceived)

        tvIconServices.setBackgroundTintList(this.getResources().getColorStateList(R.color.black));
        tvIconInvites.setBackgroundTintList(this.getResources().getColorStateList(R.color.black));
        tvIconReceived.setBackgroundTintList(this.getResources().getColorStateList(R.color.colorPrimary));

        var x = 0
        while (x < 20) {
            val fragmento = FragmentContainerView(this)

            fragmento.id = View.generateViewId()
            findViewById<LinearLayout>(R.id.ll_fragmentos).addView(fragmento)
            transaction.add(fragmento.id, CandidaturaCtd::class.java, null)
            x++
        }
        transaction.commit()
    }

    fun detalheTrabalho(v: View?) {
        findViewById<LinearLayout>(R.id.ll_fragmentos).removeAllViews()
        val transaction = supportFragmentManager.beginTransaction()

        transaction.replace(R.id.ll_fragmentos, DetalheServico::class.java, null)
        transaction.commit()
    }

    fun voltarPrincipal(v:View){
        val telaPrincipal = Intent(this, TrabalhosContratada::class.java)
        startActivity(telaPrincipal);
    }

    fun retornarTrabalhos(v: View?) {
        val getTrabalhos = ApiIclean.criar().getAllJobs()
        findViewById<LinearLayout>(R.id.ll_fragmentos).removeAllViews()

        getTrabalhos.enqueue(object : Callback<Array<Trabalho>> {
            override fun onResponse(
                call: Call<Array<Trabalho>>,
                response: Response<Array<Trabalho>>
            ) {
                val transaction = supportFragmentManager.beginTransaction()
                for (t : Trabalho in response.body()!!){
                    val argumentos = Bundle()
                    val fragmento = FragmentContainerView(baseContext)

                    fragmento.id = View.generateViewId()
                    findViewById<LinearLayout>(R.id.ll_fragmentos).addView(fragmento)

                    val detalheServico = t.especificacao.split(",").toTypedArray()
                    argumentos.putInt("id", t.id!!)
                    argumentos.putString("titulo", "${detalheServico[0]}")
                    argumentos.putString("propietaria", "${t.proprietaria!!.nome}")
                    argumentos.putString("cep", "${t.cep}")
                    argumentos.putInt("candidatas", t.candidatas!!.size)
                    transaction.add(fragmento.id, TrabalhoCtd::class.java, argumentos)
                }
                transaction.commit()
            }

            override fun onFailure(call: Call<Array<Trabalho>>, t: Throwable) {
                Toast.makeText(baseContext, "ERRO NA API", Toast.LENGTH_SHORT).show()
            }
        })
    }

    fun retornarUmTrabalho(v: View, id: Int) {
        val getTrabalho = ApiIclean.criar().getJob(id)

        getTrabalho.enqueue(object : Callback<Trabalho> {
            override fun onResponse(
                call: Call<Trabalho>,
                response: Response<Trabalho>
            ) {
                Toast.makeText(baseContext, "Resposta: ${response}", Toast.LENGTH_SHORT).show()
            }

            override fun onFailure(call: Call<Trabalho>, t: Throwable) {
                Toast.makeText(baseContext, "ERRO NA API", Toast.LENGTH_SHORT).show()
            }
        })
    }

    fun candidatarDomestica(idTrabalho: Int, idDomestica: Int) {
        val putCandidatar = ApiIclean.criar().putCandidatar(idTrabalho, idDomestica)

        putCandidatar.enqueue(object : Callback<Void>{
            override fun onResponse(call: Call<Void>, response: Response<Void>) {
                Toast.makeText(baseContext, "Você se candidatou a vaga com sucesso!", Toast.LENGTH_SHORT).show()
            }
            override fun onFailure(call: Call<Void>, t: Throwable) {
                Toast.makeText(baseContext, "ERRO NA API", Toast.LENGTH_SHORT).show()
            }
        })
    }

    fun retornarProprietaria(id: Int) {
        val getProprietaria = ApiIclean.criar().getProprietaria(id)

        getProprietaria.enqueue(object : Callback<Proprietaria>{
            override fun onResponse(call: Call<Proprietaria>, response: Response<Proprietaria>) {
                Toast.makeText(baseContext, "Passou!", Toast.LENGTH_SHORT).show()
            }
            override fun onFailure(call: Call<Proprietaria>, t: Throwable) {
                Toast.makeText(baseContext, "ERRO NA API", Toast.LENGTH_SHORT).show()
            }
        })
    }
}