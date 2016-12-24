#include <iostream>


using namespace std;

struct whore{
    string name;
    string preferences;
    int price;
    float boobiez_size;
    float vaginas_depth;
};

int main(int argc, char** argv) {
    whore isulu;
    isulu.name = "Isulu";
    isulu.preferences = "blowjob, anal, rimjob";
    isulu.price = 3000;
    isulu.boobiez_size = 1.00;
    isulu.vaginas_depth = 20.00;
    
    whore nastya;
    nastya.name = "Nastya";
    nastya.preferences = "hardcore, doggie-style, petting";
    nastya.price = 10000;
    nastya.boobiez_size = 4.00;
    nastya.vaginas_depth = 30.00;
    
    whore shramkosmum;
    shramkosmum.name = "Shramko's mum";
    shramkosmum.preferences = "the missionaire pose";
    shramkosmum.price = 666;
    shramkosmum.boobiez_size = 1.488;
    shramkosmum.vaginas_depth = 7.5;
    
    string pseudonym;
    cout << "Choose the name of whore ur interested in: Isulu, Nastya or Shramko's mum: \n ";
    cin >> pseudonym;

    if (pseudonym == "Isulu"){
        cout << "Whore's name: " << isulu.name << endl;
        cout << "Favourite sort of sex: " << isulu.preferences << endl;
        cout << "One hour costs: " << isulu.price << " roubles" << endl;
        cout << "The size of tits: " << isulu.boobiez_size << endl;
        cout << "Her pussy can receive a cock with length equal to " << isulu.vaginas_depth << " cm" << endl;
    };
    else if (pseudonym == "Nastya"){
        cout << "Whore's name: " << nastya.name << endl;
        cout << "Favourite sort of sex: " << nastya.preferences << endl;
        cout << "One hour costs: " << nastya.price << " roubles" << endl;
        cout << "The size of tits: " << nastya.boobiez_size << endl;
        cout << "Her pussy can receive a cock with length equal to " << nastya.vaginas_depth << " cm" << endl;
    };   
    else if (pseudonym == "Shramko's mum"){
        cout << "Whore's name: " << shramkosmum.name << endl;
        cout << "Favourite sort of sex :" << shramkosmum.preferences << endl;
        cout << "One hour costs: " << shramkosmum.price << " roubles" << endl;
        cout << "The size of tits: " << shramkosmum.boobiez_size << endl;
        cout << "Her pussy can receive a cock of " << shramkosmum.vaginas_depth << " cm" << endl;
        };
    else {
        cout << "you have made a wrong choice" << endl;
        };
    return 0;
}