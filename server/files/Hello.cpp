#include <bits/stdc++.h>
using namespace std;

int main(){
    string n;
    cin>>n;
    // cout<<n<<endl;
    vector<int>x;
    string input;
    istringstream iss(n);
    while(getline(iss, input, ','))
    {
        int val = stoi(input);
        x.push_back(val);
    }
    int a =0;
    for(int i=0;i<x.size();i++)
    {
        a+=x[i];
    }
    cout<<a<<endl;
    return 0;
}