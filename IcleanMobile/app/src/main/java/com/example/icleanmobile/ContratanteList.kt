package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import kotlin.properties.Delegates

class ContratanteList : AppCompatActivity() {
    var idProprietaria by Delegates.notNull<Int>()
    lateinit var btn1 :Button
    lateinit var btn2 :Button
    lateinit var btn3 :Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contratante_list)
        idProprietaria = intent.getIntExtra("idProprietaria", 0)
        getTrabalhosProprietaria(idProprietaria)

        btn1 = findViewById(R.id.btn_1)
        btn2 = findViewById(R.id.btn_2)
        btn3 = findViewById(R.id.btn_3)
    }

    fun telaPerfil(v : View) {
        val telaPerfil = Intent(this, ContratanteProfile::class.java)
        telaPerfil.putExtra("idProprietaria", idProprietaria)
        startActivity(telaPerfil)
    }

    fun telaServicos(v: View) {
        val telaServicos = Intent(this, ContratanteList::class.java)
        telaServicos.putExtra("idProprietaria", idProprietaria)
        startActivity(telaServicos)
    }

    fun telaAddJob(v : View) {
        val telaServicos = Intent(this, ContratanteNewService::class.java)
        telaServicos.putExtra("idProprietaria", idProprietaria)
        startActivity(telaServicos)
    }

    fun getTrabalhosProprietaria(id : Int){
        val getJobProprietaria = ApiIclean.criar().getAllJobsProprietaria(id)

        getJobProprietaria.enqueue(object : Callback<Array<Trabalho>>{
            override fun onResponse(
                call: Call<Array<Trabalho>>,
                response: Response<Array<Trabalho>>
            ) {
                btn1.setText("${response.body()}")
            }

            override fun onFailure(call: Call<Array<Trabalho>>, t: Throwable) {
                TODO("Not yet implemented")
            }
        })
    }
}