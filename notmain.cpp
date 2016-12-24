#include <iostream>

using namespace std;

struct whore{
    char* name;
    char* preferences;
    int price;
    float boobiez_size;
    float vaginas_depth;
};

int main(int argc, char** argv) {
    whore isulu;
    isulu.name = "Isulu";
    isulu.preferences = "blowjob, anal, rimjob";
    isulu.price = 3000;
    isulu.boobiez_size = 1,00;
    isulu.vaginas_depth = 20,00;
    
    whore nastya;
    nastya.name = "Nastya";
    nastya.preferences = "hardcore, doggie-style, petting";
    nastya.price = 10000;
    nastya.boobiez_size = 4,00;
    nastya.vaginas_depth = 30,00;
    
    whore shramkosmum;
    shramkosmum.name = "Shramko's mum";
    shramkosmum.preferences = "the missionaire pose";
    shramkosmum.price = 666;
    shramkosmum.boobiez_size = 1,488;
    shramkosmum.vaginas_depth = 8,00;

    cout << "Choose the name of whore ur interested in: Isulu, Nastya or Shramko's mum: ";

    cout << "Whore's name:" << isulu.name << endl;
    cout << "Favourite sort of sex:" << isulu.preferences << endl;
    cout << "One hour costs:" << isulu.price << "roubles" << endl;
    cout << "The size of tits:" << isulu.boobiez_size << endl;
    cout << "Her pussy can receive a cock with length equal to" << isulu.vaginas_depth << "cm" << endl;
    };