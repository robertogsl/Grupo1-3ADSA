package com.example.icleanmobile

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.location.Location
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.MarkerOptions
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import kotlin.properties.Delegates

class ContratanteSearch : AppCompatActivity(), OnMapReadyCallback, GoogleMap.OnMyLocationClickListener {
    var idProprietaria by Delegates.notNull<Int>()
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contratante_search)
        createMapFragment()
        getContratadas()
        idProprietaria = intent.getIntExtra("idProprietaria", 0)
    }

    private lateinit var map: GoogleMap
    private var latitude by Delegates.notNull<Double>()
    private var longitude by Delegates.notNull<Double>()

    companion object {
        const val REQUEST_CODE_LOCATION = 0
    }

    override fun onMapReady(googleMap: GoogleMap) {
        map = googleMap
        enableMyLocation()
        map.setOnMyLocationClickListener(this)
    }

    private fun createMapFragment() {
        val mapFragment = supportFragmentManager
            .findFragmentById(R.id.fragmentMap) as SupportMapFragment
        mapFragment.getMapAsync(this)
    }

    private fun isPermissionsGranted() = ContextCompat.checkSelfPermission(
        this,
        Manifest.permission.ACCESS_FINE_LOCATION
    ) == PackageManager.PERMISSION_GRANTED

    private fun enableMyLocation() {
        if (!::map.isInitialized) return
        if (isPermissionsGranted()) {
            map.isMyLocationEnabled = true
        } else {
            requestLocationPermission()
        }
    }

    private fun requestLocationPermission() {
        if (ActivityCompat.shouldShowRequestPermissionRationale(this,
                Manifest.permission.ACCESS_FINE_LOCATION)) {
            Toast.makeText(this, "Ve a ajustes y acepta los permisos", Toast.LENGTH_SHORT).show()
        } else {
            ActivityCompat.requestPermissions(this,
                arrayOf(Manifest.permission.ACCESS_FINE_LOCATION),
                MapaCadastro.REQUEST_CODE_LOCATION
            )
        }
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        when(requestCode){
            MapaCadastro.REQUEST_CODE_LOCATION -> if(grantResults.isNotEmpty() && grantResults[0]== PackageManager.PERMISSION_GRANTED){
                if (ActivityCompat.checkSelfPermission(
                        this,
                        Manifest.permission.ACCESS_FINE_LOCATION
                    ) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(
                        this,
                        Manifest.permission.ACCESS_COARSE_LOCATION
                    ) != PackageManager.PERMISSION_GRANTED
                ) {
                    // TODO: Consider calling
                    //    ActivityCompat#requestPermissions
                    // here to request the missing permissions, and then overriding
                    //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
                    //                                          int[] grantResults)
                    // to handle the case where the user grants the permission. See the documentation
                    // for ActivityCompat#requestPermissions for more details.
                    return
                }
                map.isMyLocationEnabled = true
            }else{
                Toast.makeText(this, "Para ativar a localização vá para configurações e aceite as permissões", Toast.LENGTH_SHORT).show()
            }
            else -> {}
        }
    }

    override fun onResumeFragments() {
        super.onResumeFragments()
        if (!::map.isInitialized) return
        if(!isPermissionsGranted()){
            map.isMyLocationEnabled = false
            Toast.makeText(this, "Para ativar a localização vá para configurações e aceite as permissões", Toast.LENGTH_SHORT).show()
        }
    }

    override fun onMyLocationClick(p0: Location) {
        Toast.makeText(this, "Sua localização é latitude: ${p0.latitude}, longitude: ${p0.longitude}", Toast.LENGTH_SHORT).show()
        this.latitude = p0.latitude
        this.longitude = p0.longitude
    }

    private fun createMarker() {
        val favoritePlace = LatLng(-23.5677666,-46.6487763)
        map.addMarker(MarkerOptions().position(favoritePlace).title("Maria Neusa"))
        map.animateCamera(
            CameraUpdateFactory.newLatLngZoom(favoritePlace, 18f),
            4000,
            null
        )
    }

    private fun createMarkerTwo(lat : Double, long : Double, nome : String, resposta : Int?) {
        var favoritePlace = LatLng(lat,long)
        map.addMarker(MarkerOptions().position(favoritePlace).title("${nome}"))
        map.setOnMarkerClickListener { trocarTela(resposta, nome) }
        map.animateCamera(
            CameraUpdateFactory.newLatLngZoom(favoritePlace, 18f),
            4000,
            null
        )
    }
//trocarTela(resposta.id)
    fun trocarTela(contratadaId: Int?, nome :String): Boolean {
        var trocar = Intent(this, ContratanteSearch2::class.java)
        trocar.putExtra("contratadaId", contratadaId)
        trocar.putExtra("nome", nome)
        startActivity(trocar)
        return true
    }

    fun getContratadas() {
        val getContratadas = ApiIclean.criar().get()

        getContratadas.enqueue(object : Callback<List<Contratada>>{
            override fun onResponse(
                call: Call<List<Contratada>>,
                response: Response<List<Contratada>>
            ) {
                for (c: Contratada in response.body()!!){
                    createMarkerTwo(c.latitude, c.longitude, c.nome, c.id)
                    Toast.makeText(baseContext, "$c", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<List<Contratada>>, t: Throwable) {
                Toast.makeText(baseContext, "Falhou", Toast.LENGTH_SHORT).show()
            }
        })
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

    fun telaMapa(v : View) {
        val telaMapa = Intent(this, ContratanteSearch::class.java)
        telaMapa.putExtra("idProprietaria", idProprietaria)
        startActivity(telaMapa)
    }
}