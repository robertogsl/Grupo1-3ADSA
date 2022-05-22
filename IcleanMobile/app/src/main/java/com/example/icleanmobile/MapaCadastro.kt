package com.example.icleanmobile

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.location.Location
import android.os.Build
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.MarkerOptions
import com.google.gson.JsonArray
import com.google.gson.JsonObject
import okhttp3.OkHttpClient
import okhttp3.Request
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import kotlin.properties.Delegates

class MapaCadastro : AppCompatActivity(), OnMapReadyCallback, GoogleMap.OnMyLocationClickListener {
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
        createMarker()
        createMarkerTwo()
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

    private fun createMarkerTwo() {
        val favoritePlace = LatLng(-23.5405189,-46.4705987)
        map.addMarker(MarkerOptions().position(favoritePlace).title("Ana Das Dores"))
        map.animateCamera(
            CameraUpdateFactory.newLatLngZoom(favoritePlace, 18f),
            4000,
            null
        )
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.fragment_mapa_cadastro)
        createMapFragment()
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
                REQUEST_CODE_LOCATION)
        }
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        when(requestCode){
            REQUEST_CODE_LOCATION -> if(grantResults.isNotEmpty() && grantResults[0]== PackageManager.PERMISSION_GRANTED){
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

    fun proximoPasso(v : View) {
        val telaTipoCadastro = Intent(this, TipoCadastro::class.java)

        val nome = intent.getStringExtra("nome")
        val cpf = intent.getStringExtra("cpf")
        val celular = intent.getStringExtra("celular")
        val nascimento = intent.getStringExtra("nascimento")
        val cadEmail = intent.getStringExtra("cadastroEmail")
        val cadSenha = intent.getStringExtra("cadastroSenha")

        telaTipoCadastro.putExtra("nome", "${nome}")
        telaTipoCadastro.putExtra("cpf", "${cpf}")
        telaTipoCadastro.putExtra("celular", "${celular}")
        telaTipoCadastro.putExtra("nascimento", "${nascimento}")
        telaTipoCadastro.putExtra("cadastroEmail", "${cadEmail}")
        telaTipoCadastro.putExtra("cadastroSenha", "${cadSenha}")
        telaTipoCadastro.putExtra("longitude", longitude)
        telaTipoCadastro.putExtra("latitude", latitude)

        startActivity(telaTipoCadastro)
    }
}