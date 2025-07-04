"use client";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useState } from "react";

export default function SafeDeals() {
  const [role, setRole] = useState("seeker");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [dealDetails, setDealDetails] = useState("");
  const [reference, setReference] = useState("");

  const handleSendOTP = () => {
    setOtpSent(true);
    alert("OTP sent to your registered email/mobile.");
  };

  const handleVerifyOTP = () => {
    if (otp === "123456") {
      setOtpVerified(true);
      alert("OTP verified successfully.");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleSubmitDeal = () => {
    if (dealDetails.trim() === "" || reference.trim() === "") {
      alert("Please fill in all fields before submitting.");
      return;
    }
    // Here you can send the data to backend/API or just display it for now
    alert(`Deal Submitted!\nRole: ${role}\nDetails: ${dealDetails}\nReference: ${reference}`);
    // You can reset the fields after submission if needed
    setDealDetails("");
    setReference("");
    setOtpVerified(false);
    setOtpSent(false);
    setOtp("");
  };

  return (
    <div className="grid gap-6 p-6 max-w-xl mx-auto">
      <Card>
        <div className="grid gap-4 p-6">
          <h2 className="text-xl font-bold text-center">Safe Deal Portal</h2>

          <div className="grid grid-cols-2 gap-2">
            <Button variant={role === "seeker" ? "default" : "outline"} onClick={() => setRole("seeker")}>Seeker</Button>
            <Button variant={role === "traveller" ? "default" : "outline"} onClick={() => setRole("traveller")}>Traveller</Button>
          </div>

          {!otpVerified && (
            <div className="grid gap-3">
              <Label>Email or Mobile</Label>
              <Input type="text" placeholder="Enter registered email or mobile" />
              {!otpSent ? (
                <Button onClick={handleSendOTP}>Send OTP</Button>
              ) : (
                <>
                  <Label>Enter OTP</Label>
                  <Input type="text" value={otp} onChange={e => setOtp(e.target.value)} placeholder="Enter 6-digit OTP" />
                  <Button onClick={handleVerifyOTP}>Verify OTP</Button>
                </>
              )}
            </div>
          )}

          {otpVerified && (
            <div className="grid gap-3">
              <Label>Deal Details</Label>
              <Input
                type="text"
                value={dealDetails}
                onChange={e => setDealDetails(e.target.value)}
                placeholder="Item, Amount, Date, Location (e.g. iPhone 13, ₹65,000, 17-June-2025, Chennai)"
              />
              <Label>Reference ID or Message Screenshot Link</Label>
              <Input
                type="text"
                value={reference}
                onChange={e => setReference(e.target.value)}
                placeholder="Enter RefID or link to chat screenshot (e.g. Google Drive link)"
              />
              <Button onClick={handleSubmitDeal}>Submit Safe Deal</Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
